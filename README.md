# Base de code du projet P6 - Parcours Front-end

## Démarrer le projet

npm install.

### Déploiement sur github-pages
[user_name]: sophapojul
[remote_name]: origin
[repo_name]: p6-Front-End-Fisheye-vitejs
git remote add [remote_name] https://github.com/[user_name]/[repo_name].git  
git branch -M main  
git push -u [remote_name] main  
nvim vite.config.js  
```  
import { defineConfig } from 'vite';

        export default defineConfig({
        base: '/[repo_name]/'
        });
```  
npm run build  
git add -f dist  
git commit -am "adding dist"  
git subtree push --prefix dist [remote_name] gh-pages  
go to github repo [repo_name] and settings then pages  
go to Source Branch gh-pages then save  
go to Actions wait workflow's end  
the site is published at https://[user_name].github.io/[repo_name]/  
