# How to Deploy a Static Site on Amazon S3
![Cloud_resume_architectural_diagram](https://github.com/zablon-oigo/deploy-static-site-on-amazon-s3/assets/143833326/bfa4c4a1-f270-4774-b199-7b5f909d87f2)

## What is Amazon S3?
Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.

## Benefits of S3
- Durable: The services provided allow your app to scale without fluctuating downtime.
- Highly available: It is available across so many data regions worldwide.
## Deploying a static website
 There are several ways to host your website:
 - Using the S3 console
 - Using the AWS software development kit
 - Using the AWS command line interface
   
We will use the S3 console to deploy and host a website in this project.

# Step 1
 ### Create a bucket
A bucket is a container for objects. To store your data in Amazon S3, you first create a bucket and specify a bucket name and AWS Region. Then, you upload your data to that bucket as objects in Amazon S3.
![s3](https://github.com/zablon-oigo/deploy-static-site-on-amazon-s3/assets/143833326/fc04633e-cd28-4990-8189-0e602b60a2fb)
 ###  setup the S3 Bucket to store objects.
 *Give a globally unique name and region to your bucket.*
![bucket1](https://github.com/zablon-oigo/deploy-static-site-on-amazon-s3/assets/143833326/c173acd6-8588-4f8d-9c7b-ea46aeef0898)
![bucket2](https://github.com/zablon-oigo/deploy-static-site-on-amazon-s3/assets/143833326/c13ac49c-8af2-4138-8cfa-3b434d054dce)

- Block all public access - It provides an additional layer of security for your data, preventing unauthorized access and ensuring that your data is protected at all times.
![bucket3](https://github.com/zablon-oigo/deploy-static-site-on-amazon-s3/assets/143833326/765e1544-33b6-46e1-9af9-78986464d240)
![bucket4](https://github.com/zablon-oigo/deploy-static-site-on-amazon-s3/assets/143833326/e1904b0b-08e0-4795-9801-5c503c117601)
![bucket5](https://github.com/zablon-oigo/deploy-static-site-on-amazon-s3/assets/143833326/936b6638-e861-489c-9c5d-cfb24b489e2a)
### Now let's upload some objects in S3 bucket.
![bucket6](https://github.com/zablon-oigo/deploy-static-site-on-amazon-s3/assets/143833326/4c75a633-4aee-4cb1-9cd2-e109f1138153)

## What is Cloudfront?
Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users
### How you set up CloudFront to deliver content
 - You specify origin servers, like an Amazon S3 bucket or your own HTTP server, from which CloudFront gets your files which will then be distributed from CloudFront edge locations all over the 
   world.
 -  For Origin, Origin domain, choose the S3 bucket that you created for this tutorial.
 -  For Origin, Origin access, select Origin access control settings (recommended).
 -  For Origin access control, choose Create new OAC.
 -  In the Create new OAC pane, keep the default settings and choose Create.



