command = '/home/alexmais/pythonProd/chess/venv/bin/gunicorn'
pythonpath = '/home/alexmais/pythonProd/chess/chess'
bind = '127.0.0.1:8000'
workers = 3
raw_env = [
    "SECRET_KEY=django-insecure-u47(%9mjcq-#@wqr3t_96ef+%(q%v6fm0_ba+i$8s*wqin%9-b",
    "NAME=chess",
    "USER=alex",
    "PASSWORD=123456",
]



