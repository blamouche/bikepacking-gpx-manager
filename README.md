# 🚴 Cycling Companion

Une application web complète pour la planification et le suivi de sorties cyclotourisme et bikepacking. Visualisez vos traces GPX, gérez vos waypoints, découvrez les points d'intérêt le long de votre parcours et créez votre roadbook automatiquement.

## ✨ Fonctionnalités principales

### 📍 Gestion des traces GPX
- **Import de fichiers GPX** : Glissez-déposez ou sélectionnez vos fichiers
- **Visualisation interactive** : Affichage de la trace avec flèches directionnelles
- **Profil d'élévation** : Graphique interactif avec survol et synchronisation carte
- **Statistiques détaillées** : Distance, dénivelé positif/négatif, altitude min/max
- **Sauvegarde automatique** : Vos traces sont conservées localement dans le navigateur
- **Export enrichi** : Exportez votre trace avec vos waypoints personnalisés

### 🗺️ Cartographie avancée
- **Multiples fonds de carte** :
  - 🚴 CyclOSM (optimisé vélo, par défaut)
  - 🌍 OpenStreetMap
  - ⛰️ OpenTopoMap
  - 🗺️ CARTO Voyager
  - 🛰️ Esri Imagery (satellite)
  - 🛰️+🏙️ Esri Hybrid
- **Aperçus miniatures** synchronisés avec la vue principale
- **Géolocalisation en temps réel** avec suivi automatique

### 📌 Waypoints personnalisés
- **Ajout facile** : Cliquez directement sur la trace
- **Gestion complète** : Nommage, édition, suppression
- **Visualisation claire** : Marqueurs distincts avec tooltips
- **Persistance** : Sauvegarde automatique avec la trace

### 🎯 Points d'intérêt (POI)
Découvrez les services utiles le long de votre parcours :
- **Services vélo** : Stations de réparation, magasins de vélo
- **Ressources** : Points d'eau potable
- **Hébergement outdoor** : Campings, bivouacs autorisés, refuges alpins
- **Hébergement** : Hôtels, auberges de jeunesse, chambres d'hôtes
- **Sanitaires** : Toilettes publiques, douches
- **Alimentation** : Supermarchés, épiceries
- **Restauration** : Restaurants, cafés, fast-food
- **Santé** : Pharmacies, hôpitaux
- **Patrimoine** : Cimetières et points d'intérêt culturels

**Fonctionnalités POI** :
- Profils prédéfinis ("J'ai besoin d'eau", "J'ai besoin de réparer", etc.)
- Affichage conditionnel selon le zoom
- Cache intelligent pour performance optimale
- Filtres par catégorie avec compteurs
- Informations détaillées (horaires, téléphone, site web)

### 📋 Roadbook automatique
- **Génération automatique** des étapes avec waypoints
- **Distances cumulées et intermédiaires**
- **Altitudes et dénivelés restants**
- **Export au format texte** vers presse-papiers
- **Navigation rapide** : Centrez la carte sur chaque étape

### 🎨 Interface moderne
- **Design épuré et fonctionnel**
- **Responsive** : Adapté mobile, tablette et desktop
- **Mode sombre** : Respect des préférences système
- **Panneau latéral collapsible**
- **Sections accordéon** avec sauvegarde des préférences
- **Accessibilité** : Navigation clavier, ARIA, lecteurs d'écran

## 🚀 Installation et utilisation

### Option 1 : Fichier HTML autonome
1. Téléchargez le fichier HTML
2. Ouvrez-le dans un navigateur moderne (Chrome, Firefox, Safari, Edge)
3. Aucune installation ni serveur requis !

### Option 2 : Serveur web local
```bash
# Python 3
python -m http.server 8000

# Node.js (avec http-server)
npx http-server

# Puis ouvrez http://localhost:8000
```

### Utilisation
1. **Charger une trace** : Glissez-déposez un fichier .gpx ou cliquez sur la zone d'import
2. **Explorer la carte** : Zoomez, déplacez-vous, changez de style
3. **Ajouter des waypoints** : Cliquez sur la trace pour marquer un point d'intérêt
4. **Activer les POI** : Cochez les catégories souhaitées ou utilisez les profils prédéfinis
5. **Consulter le roadbook** : Visualisez les étapes avec distances et altitudes
6. **Exporter** : Téléchargez votre trace enrichie au format GPX

## 🛠️ Technologies utilisées

- **[Leaflet.js](https://leafletjs.com/)** (1.9.4) - Cartographie interactive
- **[Leaflet PolylineDecorator](https://github.com/bbecquet/Leaflet.PolylineDecorator)** - Flèches directionnelles
- **[Overpass API](https://overpass-api.de/)** - Requêtes POI OpenStreetMap
- **LocalStorage API** - Persistance des données
- **Geolocation API** - Suivi GPS temps réel
- **Canvas API** - Graphiques d'élévation personnalisés
- **Vanilla JavaScript** - Aucune dépendance framework

### Sources cartographiques
- OpenStreetMap contributors
- CyclOSM
- OpenTopoMap
- CARTO
- Esri

## 📁 Structure du projet

```
cycling-companion/
│
├── index.html              # Application complète (standalone)
│
└── README.md              # Ce fichier
```

L'application est entièrement contenue dans un seul fichier HTML avec :
- CSS inline pour le style
- JavaScript inline pour la logique
- Chargement CDN pour les bibliothèques externes

## 🎯 Fonctionnalités avancées

### Gestion intelligente du cache
- Cache POI avec TTL de 10 minutes
- Limitation automatique du nombre de POI affichés
- Débounce des requêtes pour optimiser les performances

### Persistance des données
- Sauvegarde automatique des traces GPX chargées
- Mémorisation des waypoints personnalisés
- Préférences utilisateur (calques actifs, sections dépliées)
- Style de carte favori

### Profil d'élévation interactif
- Canvas haute définition avec support DPI
- Survol synchronisé avec marqueur sur la carte
- Affichage des waypoints sur le profil
- Statistiques en temps réel (distance, D+, D-, altitude)

### Roadbook intelligent
- Calcul automatique des distances intermédiaires
- Dénivelé positif restant par étape
- Détection des traces circulaires
- Export formaté pour impression ou partage

## 🌍 Compatibilité

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile (iOS Safari, Chrome Android)

## 📝 Limitations connues

- **Taille des fichiers GPX** : Le LocalStorage est limité à ~5-10 MB selon le navigateur
- **Nombre de POI** : Limitation à 500 POI totaux pour maintenir les performances
- **Hors ligne** : Nécessite une connexion pour charger les tuiles et POI (la trace GPX fonctionne hors ligne)

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour proposer une amélioration :

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/amelioration`)
3. Committez vos changements (`git commit -m 'Ajout de fonctionnalité'`)
4. Pushez vers la branche (`git push origin feature/amelioration`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est développé par [Benoit Lamouche](https://lamouche.fr) et utilise des données © OpenStreetMap contributors sous licence ODbL.

Les tuiles cartographiques sont fournies par :
- OpenStreetMap Foundation
- CyclOSM
- OpenTopoMap
- CARTO
- Esri

## 🙏 Remerciements

- La communauté OpenStreetMap pour les données cartographiques
- Les mainteneurs de Leaflet.js
- L'équipe Overpass API
- Tous les contributeurs des fonds de carte utilisés

## 📧 Contact

Pour toute question ou suggestion : [lamouche.fr](https://lamouche.fr)

---

**Note** : Cette application ne collecte aucune donnée personnelle. Toutes les informations sont stockées localement dans votre navigateur.