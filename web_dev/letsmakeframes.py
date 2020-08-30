import cv2

cap = cv2.VideoCapture('frames/videoplayback.mp4')
i = 0
while True:

    ret, frame = cap.read()
    cv2.imshow('webcam', frame)
    cv2.imwrite('frames/plant_frame_'+str(i)+'.png', frame)
    i+=1

    if cv2.waitKey(1) & 0xFF == ord('z'):
        break

cap.release()
out.release()

cv2.destroyAllWindows()