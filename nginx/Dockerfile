FROM nginx:latest

##Define o diretório 
##WORKDIR /app

##RUN apt-get update && apt-get install vim -y
##RUN apt-get install vim -y 

##Estou copiando o arquivo HTML que tenho na minha pasta para a pasta da imagem nginx
#COPY html /usr/share/nginx/html

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD [ "nginx", "-g", "daemon off;" ]

