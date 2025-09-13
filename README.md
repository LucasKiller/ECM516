# ECM516
Repositório de aprendizado e armazenamento das aulas ECM516

## Subir Docker

1. Baixar Kubernetes

2. Docker Build:
    - Inserir `docker build -t lucasmilani/{nome do evento} .` Ex.: `docker build -t lucasmilani/lembretes .`
    - Inserir `kubectl apply -f {nome do eveto}-deployment.yaml` (Faça isso para ...service.yaml se existir)

3. Testar:
    - Inserir `kubectl get services` e obtenha a porta daquele serviço
    - Com Postaman fazer um get/post com a porta e serviço desejado Ex.: http://localhost:30695/lembretes

Obs: Se caso mudar algum conteúdo dentro do index.js, você deve digitar `kubectl rollout restart deployment {nome do evento}-deployment` e rodar o build daquele serviço de novo
