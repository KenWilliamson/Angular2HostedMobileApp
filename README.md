# Angular 2 Mobile application 
This is a proof of concept Angular 2 backend mobile application.
The HostedCordovaApp project is a wrapper around this application.

## additional features
This code includes a custom date pipe that fixes the date pipe 
issue that caused Angular 2 applications to crash on older versions of Android.

## The IDE
This project was created with NetBeans.

## Cordova Plugin Calls
The HeroDetailsComponent makes calls to Cordova plugins as a way to test functionality. 
The Device and Camera plugins are used.

## Create a Mobile App
All that is needed to turn this app into a mobile all is to host it somewhere and build a wrapper with the 
HostedCordovaApp (https://github.com/KenWilliamson/HostedCordovaApp.git) project.
Configure the HostedCordovaApp wrapper to point to where this application is hosted. 
See HostedCordovaApp for more details.
