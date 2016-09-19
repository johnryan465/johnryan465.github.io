---
title: "Setting up AWS spot instances for machine learning"
layout: single
excerpt: "A simple guide to set up AWS spot instances for machine learning"
sitemap: false
---

AWS Spot Instances are a way of getting computing resources at a steep discount. The reason they are much cheaper than a standard instance is that if there is high demand the price may change and if it rises above you max price the instance may be terminated, not a stable situation for a production server but perfect for small scale machine learning experiments.

First go to your AWS dashboard.
Then click on the EC2 under Compute.
![AWS 1](http://www.johnryan.tech/wp-content/uploads/2016/07/AWS-Management-Console.png)


Go to launch instance
![AWS 2](http://www.johnryan.tech/wp-content/uploads/2016/07/EC2-Management-Console.png)

Then select the Ubuntu 14.04 image
<img src="http://www.johnryan.tech/wp-content/uploads/2016/07/EC2-Management-Console1.png" alt="" />

Pick whichever spec machine you want.
<strong>If you want to use Keras for Deep Learning I would strongly recommend selecting an instance at this stage that contains a GPU</strong>
<img src="http://www.johnryan.tech/wp-content/uploads/2016/07/EC2-Management-Console4.png" alt="" />

Tick the spot instance button and put in a relatively high number(It doesn't matter you won't be paying this price)
Click Review and Launch
<img src="http://www.johnryan.tech/wp-content/uploads/2016/07/EC2-Management-Console5.png" alt="" />

Click Launch
<img src="http://www.johnryan.tech/wp-content/uploads/2016/07/EC2-Management-Console6.png" alt="" />

Make sure to download the key pair or else you wont be able to access the instance.
<img src="http://www.johnryan.tech/wp-content/uploads/2016/07/EC2-Management-Console7.png" alt="" />

Success!
<img src="http://www.johnryan.tech/wp-content/uploads/2016/07/EC2-Management-Console8.png" alt="" />

You now have an AWS instance that is started.
Now go to your running instances and take note of your public IP
<img src="http://www.johnryan.tech/wp-content/uploads/2016/07/EC2-Management-Console10.png" alt="" />

Next install putty and puttygen from [here](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)

Open Puttygen and load in the key that you downloaded.
<img src="http://www.johnryan.tech/wp-content/uploads/2016/07/Screenshot-1.png" alt="" />
Then save the private key, close puttygen and open putty.

In the hostname field type ubuntu@(your ip)
<img src="http://www.johnryan.tech/wp-content/uploads/2016/07/Screenshot-4.png" alt="" />

Navigate to Connection -&gt; SSH -&gt; Auth and set the private to key to the one created by Puttygen
<img src="http://www.johnryan.tech/wp-content/uploads/2016/07/Screenshot-6.png" alt="" />

Go back to session and enter a name in "Saved Sessions" then click save, in the future you can just select the name you have given it and select load to open the SSH session.
<img src="http://www.johnryan.tech/wp-content/uploads/2016/07/Screenshot-5.png" alt="" />

Click open, then click yes on the security alert.
<img src="http://www.johnryan.tech/wp-content/uploads/2016/07/Screenshot-7.png" alt="" />

When the shell appears enter the following commands to install sklearn on the instance
<img src="http://www.johnryan.tech/wp-content/uploads/2016/07/Screenshot-8.png" alt="" />
## Installing Scikit-Learn
`sudo apt-get update`

`sudo apt-get upgrade`

`sudo apt-get -y install python-numpy`

`sudo apt-get -y install python-scipy`

`sudo apt-get -y install python-pip`

`sudo pip install scikit-learn`

That's it! You now have setup an AWS spot instance with scikit-learn installed.
## Installing Keras
We are going to be using the Theano back-end for Keras in this tutorial.

First we will install Theano

`sudo apt-get install python-nose g++ libopenblas-dev git`

`sudo pip install Theano`

Then we will install CUDA for GPU acceleration.

`sudo wget http://developer.download.nvidia.com/compute/cuda/repos/ubuntu1404/x86_64/cuda-repo-ubuntu1404_7.0-28_amd64.deb`

`sudo dpkg -i cuda-repo-ubuntu1404_7.0-28_amd64.deb`

`sudo apt-get update`

`apt-get install linux-headers-$(uname –r)`

`sudo apt-get install -y cuda`

`echo -e "\nexport PATH=/usr/local/cuda/bin:$PATH\n\nexport LD_LIBRARY_PATH=/usr/local/cuda/lib64" >> .bashrc`

`echo -e "\n[global]\nfloatX=float32\ndevice=gpu0\n[mode]=FAST_RUN\n\n[nvcc]\nfastmath=True\n\n[cuda]\nroot=/usr/local/cuda" >> ~/.theanorc`

`sudo reboot`

Then reconnect and install keras

`sudo pip install keras`
