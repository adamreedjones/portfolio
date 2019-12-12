# portfolio
My Personal web portfolio

## Developer Guide

### Clone GitHub repo
> git clone https://github.com/adamreedjones/portfolio.git

### Pull latest image from docker and run it
> docker pull adamreedjones/portfolio:latest
> docker run -it --rm -p 8000:80 --name portfolio adamreedjones/portfolio

### Run application in vs code without certificate errors:
> dotnet dev-certs https --trust