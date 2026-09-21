import cv2
import mediapipe as mp
import numpy as np

mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
hands = mp_hands.Hands(
    max_num_hands=1,
    min_detection_confidence=0.7,
    min_tracking_confidence=0.7,
)


def is_peace_or_two_fingers(landmarks, image_width, image_height):
    """Deteksi gesture peace / dua jari (jari telunjuk dan tengah terbuka)."""
    try:
        # Landmark yang dipakai untuk jari
        wrist = landmarks[0]
        thumb_tip = landmarks[4]
        index_tip = landmarks[8]
        middle_tip = landmarks[12]
        ring_tip = landmarks[16]
        pinky_tip = landmarks[20]

        # Helper: cek apakah ujung jari lebih tinggi dari sendi atasnya
        def finger_open(tip, pip):
            return tip.y < pip.y

        # Cek jari telunjuk dan tengah terbuka, sisanya tertutup
        index_open = finger_open(index_tip, landmarks[6])
        middle_open = finger_open(middle_tip, landmarks[10])
        ring_open = finger_open(ring_tip, landmarks[14])
        pinky_open = finger_open(pinky_tip, landmarks[18])

        return index_open and middle_open and not ring_open and not pinky_open
    except IndexError:
        return False


cap = cv2.VideoCapture(0)

if not cap.isOpened():
    raise RuntimeError("Kamera tidak bisa dibuka. Periksa webcam Anda.")

while True:
    ret, frame = cap.read()
    if not ret:
        print("Gagal membaca frame dari kamera.")
        break

    frame = cv2.flip(frame, 1)
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = hands.process(rgb)

    blur_active = False
    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            mp_drawing.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)
            h, w, _ = frame.shape
            if is_peace_or_two_fingers(hand_landmarks.landmark, w, h):
                blur_active = True
                break

    if blur_active:
        frame = cv2.GaussianBlur(frame, (51, 51), 0)
        cv2.putText(frame, "BLUR AKTIF", (20, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
    else:
        cv2.putText(frame, "Tunjuk peace / dua jari", (20, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)

    cv2.imshow("Hand Gesture Blur", frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
