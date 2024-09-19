import socket
import threading

HOST='localhost'
PORT=3000

def connect_a_client(conn,addr):
    print("new client connected")
    data=conn.recv(2048)
    print("data recieved from client is:",data)
    conn.sendall(b"server has  recieved your request")

#this line created a brand new socket object
server_socket=socket.socket()

#this line bind our socket object to the host and port
server_socket.bind((HOST,PORT))

# start listening  for client
server_socket.listen()
print("server is listening on ",HOST,PORT)
conn, addr=server_socket.accept()
t=threading.Thread(target=connect_a_client,args=(conn,addr))
t.start()





