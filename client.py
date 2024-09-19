import socket
print("starting a client 1")

HOST='localhost'
PORT=3000
client_socket=socket.socket()
client_socket.connect((HOST,PORT))

client_socket.sendall(b"hello from client")

response=client_socket.recv(2048)

print(response)
