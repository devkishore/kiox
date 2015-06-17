import RPi.GPIO as GPIO  
from time import sleep    # this lets us have a time delay (see line 12)  
GPIO.setmode(GPIO.BCM)  # set up BCM GPIO numbering  
GPIO.setup(2, GPIO.IN)    # set GPIO2 as input (button)  
GPIO.setup(2, GPIO.OUT)   # set GPIO2 as an output (LED)  

while True:       # this will carry on until you hit CTRL+C  
	if GPIO.input(2):	 	# if port 2 == 1  
		print "Port 2 is 1/HIGH/True - LED OFF"  
		GPIO.output(2, 0)       # set port/pin value to 1/HIGH/True  
		sleep(2)
	else:  
        	print "Port 2 is 0/LOW/False - LED ON"  
        	GPIO.output(2, 1)       # set port/pin value to 0/LOW/False  
        	sleep(2)        	# wait 0.1 seconds  
