# Guide d'utilisation de Mémento(Windows)

Mémento permet la détection de personne sur des photos:

<hr>

Par exemple, vous avez un mariage et le photographe vous donne un fichier de 2100 photos magnifiques et mémorables de vous et vos amis. Quel enfer d'aller fouiller partout et de perdre 3h pour retrouver uniquement les photos où vous apparaissez. Et bien vous pouvez retrouver vos photos uniquement grâce à un selfie et une photo importée (ajout en cours).

<hr>

<span style="font-family:cursive"><strong>Etape 1: Clonage</strong></span>

La première étape consiste à cloner les 2 fichiers suivants:

- MementoClient.V2 (In the VueJS file)
- MementoServer.V2
- 
    ```
    git clone https://github.com/N4tsoni/Memento.V2-Frontend.git
    ```

<hr>

<span style="font-family:cursive"><strong>Etape 2: Installation du backend</strong></span>

La deuxième étape consiste à installer le backend de Mémento. Voici les prérequis nécessaires :

1. **Prérequis :**
    1. [Installer Docker et le rendre compatible avec Nvidia](https://docs.docker.com/desktop/gpu/) Vous aurez besoin de Docker + WSL + CUDA + NvidiaDev Toolkits
2. **Lancement du back:"**
	1. Lancer Docker (Docker Desktop sur Windows)
	2. Lancer un terminal dans le client et taper la commande suivante: 
		```bash
		docker compose up --build ##-- build pour recompiler l'image
```
	![](https://github.com/N4tsoni/Memento.V2/blob/main/terminal_docker.gif)
<hr>
<span style="font-family:cursive"><strong>Etape 3: Installation du front</strong></span>

1. **Prérequis :**
    - Assurez-vous d'avoir Node.js installé sur votre système. Si ce n'est pas déjà le cas, vous pouvez le télécharger et l'installer à partir du site officiel de [Node.js](https://nodejs.org/).


3. **Installation des dépendances :**
    - Accédez au répertoire cloné (`Memento.V2-Frontend`) à l'aide de la commande suivante :
    ```
    cd Memento.V2-Frontend
    ```
    - Installez les dépendances Node.js en exécutant la commande suivante dans le terminal :
    ```
    npm install
    ```
		- Ensuite lancez l'appli:
	  ```
    npm run dev --build
    ```

![](https://github.com/N4tsoni/Memento.V2/blob/main/terminal_npm.gif)
	
Pour plus d'infos : [Le lien du gitHub de la V1](https://github.com/zyioump)
