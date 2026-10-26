Para modificações e novas funcionalidades, usamos a nomenclatura feature/descrição-da-modificação. 
Para correção de problemas, usamos fix/descrição-do-problema. 
E para modificações urgentes na main, usamos hotfix/descrição-do-problema.
git checkout -b nome-da-branch	Cria e muda para uma nova branch a partir da atual.
git branch	Lista todas as branches existentes no repositório local.
git status	Mostra os arquivos modificados e o estado da branch atual.
git add .	Adiciona todas as modificações para serem incluídas no próximo commit.
git add nome-do-arquivo	Adiciona apenas um arquivo específico.
git commit -m "mensagem"	Cria um commit com as mudanças adicionadas.
git log --oneline	Exibe o histórico de commits de forma resumida.
git push origin nome-da-branch	Envia a branch e seus commits para o repositório remoto (GitHub).
git checkout main	Volta para a branch main.
git pull origin main	Atualiza a main local com as últimas alterações do repositório remoto.
