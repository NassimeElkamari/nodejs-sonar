WorkShop2 : Analyse SAST avec SonarQube et Semgrep

La création d’une application node js qui offre une api /tasks :

<img width="651" height="410" alt="image" src="https://github.com/user-attachments/assets/41c24ea5-590f-4c8b-a078-6de56ce3d962" />


La création d’un Jenkinsfile dans le root du projet node js , il contient les étapes :  Checkout → Installation des dependances → Lancement des tests → Lancement de l’analyse du code via SonarQube qui est démarré dans un conteneur Docker.

<img width="670" height="419" alt="image" src="https://github.com/user-attachments/assets/0943cbf8-f46a-4d4d-8398-84438a4b2fae" />


La création d’une pipeline sur la platforme jenkins et sa liaison avec le repo github contenant notre projet :

<img width="691" height="411" alt="image" src="https://github.com/user-attachments/assets/e18193cf-ee52-4c43-a7bf-180b88d62c2e" />


Le lancement du pipeline jenkins qui donne une execution success de toutes les étapes déjà mentionnées dans le Jenkinsfile :

<img width="497" height="244" alt="image" src="https://github.com/user-attachments/assets/150f12f6-f510-444f-b962-74df5eb25380" />


La création d’un projet sur la platforme jenkins pour l’analyse de notre code :

<img width="597" height="188" alt="image" src="https://github.com/user-attachments/assets/52aedae5-2563-44c7-a969-e6011c10da21" />


L’analyse du code donne un résultat “Failed” , parce qu’il a trouvé des issues dans notre code , se sont des probèmes que nous avons fait nous meme juste pour le test .

<img width="524" height="256" alt="image" src="https://github.com/user-attachments/assets/a972c7c7-8a90-4b14-9323-af768f45ca37" />




