import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync


class Consumer(WebsocketConsumer):

    def connect(self):
        self.room_group_name = 'teleoperadores'
        print("conectado")
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()


    def notify_consumers(self, event):
        action = event['action']
        alarma = event['alarma']

        self.send(text_data=json.dumps({
            'action': action,
            'alarma': alarma
        }))