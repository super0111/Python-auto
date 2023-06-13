from func import AltTab, AltDoubleTab, CtrlTab
import time
import pyautogui
import sys
import threading

def agent(limit, start):
    
    # print(limit, start)
    speed = -1000
    flag = True
    sleepTime = 2

    while True:

        end = int(time.time())
        delta = (end - start)
        # print("time elapsed: ", delta)
        if delta > limit:
            return
        time.sleep(5)
        AltDoubleTab()
        time.sleep(3)
        AltTab()
        time.sleep(3)

        flag = not flag
        
        for i in range(5):
            _speed = speed if flag else -1 * speed
            print("\nrequest:", {}, "\n")
            pyautogui.scroll(int(_speed))
            pyautogui.time.sleep(int(sleepTime))

def main():
    args = sys.argv[1:]
    
    limit = 3000
    
    if len(args) > 0:
        limit = int(args[0])

    print("server is running on port ", limit)

    #creating thread
    t1 = threading.Thread(target=agent,args=(limit, int(time.time()),))

    t1.start()
    t1.join()
    print("server ended")

main()