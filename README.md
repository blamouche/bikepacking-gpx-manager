# Lecteur GPX - Carte OpenStreetMap

Application web interactive pour visualiser, éditer et enrichir vos traces GPX avec une interface intuitive basée sur OpenStreetMap.

## 📋 Sommaire

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Démarrage rapide](#démarrage-rapide)
- [Guide d'utilisation](#guide-dutilisation)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du code](#structure-du-code)
- [Formats supportés](#formats-supportés)
- [Limitations connues](#limitations-connues)
- [Contribution](#contribution)

## 🎯 Aperçu

Cette application permet de visualiser des fichiers GPX (GPS Exchange Format) sur une carte interactive OpenStreetMap. Elle offre la possibilité d'ajouter, modifier et supprimer des waypoints (points d'intérêt) avant d'exporter une nouvelle version enrichie de votre trace GPX.

**Cas d'usage principaux :**
- Visualiser des traces GPS de randonnées, cyclisme, course à pied
- Ajouter des points d'intérêt le long d'un parcours
- Annoter des traces GPX avec des waypoints personnalisés
- Préparer des itinéraires avec des étapes identifiées

## ✨ Fonctionnalités

### Visualisation
- 🗺️ **Carte interactive** basée sur OpenStreetMap avec zoom et déplacement
- 📍 **Affichage des traces** (tracks) en rouge avec flèches directionnelles
- 🛤️ **Support des routes GPX** avec rendu adapté
- 📌 **Visualisation des waypoints** existants avec markers

### Import
- 📁 **Import par bouton** : sélection classique de fichier
- 🎯 **Drag & drop** : glissez-déposez votre fichier GPX directement sur la carte
- ✅ **Validation automatique** du format GPX

### Édition de waypoints
- ➕ **Ajout de waypoints** : cliquez sur la trace pour créer un nouveau point
- ✏️ **Renommage** : éditez le nom des waypoints via popup interactive
- 🗑️ **Suppression** : retirez les waypoints non désirés
- 💬 **Tooltips** : affichage du nom au survol

### Export
- 💾 **Export GPX enrichi** : téléchargez votre trace avec les waypoints ajoutés/modifiés
- 🏷️ **Nommage automatique** : fichier exporté avec suffixe `_with_waypoints.gpx`
- 🔄 **Préservation des données** : les tracks et routes originaux sont conservés

### Interface
- 🇫🇷 **Interface en français**
- 🎨 **Design moderne** et épuré
- 📱 **Responsive** : fonctionne sur desktop et mobile
- ⚡ **Léger** : aucune dépendance serveur, 100% client-side

## 🚀 Démarrage rapide

### Installation

1. **Téléchargez le fichier HTML** ou clonez ce dépôt
2. **Ouvrez le fichier** `index.html` dans votre navigateur web moderne
3. **C'est tout !** Aucune installation ou serveur requis

### Première utilisation

1. Cliquez sur **"Importer GPX"** ou glissez-déposez un fichier `.gpx` sur la carte
2. La trace s'affiche automatiquement avec un zoom adapté
3. Cliquez sur la trace pour ajouter des waypoints
4. Cliquez sur **"Exporter GPX"** pour télécharger votre trace enrichie

## 📖 Guide d'utilisation

### Importer une trace GPX

**Méthode 1 : Bouton d'import**
1. Cliquez sur le bouton **"Importer GPX"** en haut à gauche
2. Sélectionnez votre fichier `.gpx` dans l'explorateur de fichiers
3. La trace s'affiche instantanément sur la carte

**Méthode 2 : Drag & drop**
1. Glissez votre fichier `.gpx` depuis votre gestionnaire de fichiers
2. Déposez-le n'importe où sur la carte
3. Un contour bleu apparaît pour confirmer la zone de dépôt

### Ajouter des waypoints

1. **Cliquez directement sur la trace** (ligne rouge)
2. Une boîte de dialogue apparaît pour nommer le waypoint
3. Entrez un nom ou validez le nom par défaut (ex: "Waypoint 1")
4. Le waypoint apparaît avec un marker bleu standard

### Modifier un waypoint

1. **Cliquez sur le marker** du waypoint
2. Un popup s'ouvre avec un champ de texte
3. Modifiez le nom et cliquez sur **"Enregistrer"**
4. Ou appuyez sur **Entrée** pour valider rapidement

### Supprimer un waypoint

1. **Cliquez sur le marker** du waypoint
2. Dans le popup, cliquez sur **"Supprimer"**
3. Le waypoint disparaît immédiatement de la carte

### Exporter la trace enrichie

1. Cliquez sur **"Exporter GPX"** (actif uniquement après import)
2. Le fichier est téléchargé automatiquement
3. Nom du fichier : `[nom_original]_with_waypoints.gpx`
4. Le fichier contient tous les waypoints visibles sur la carte

### Navigation sur la carte

- **Zoom** : molette de souris ou boutons +/- en haut à droite
- **Déplacement** : cliquez et glissez la carte
- **Recentrage** : importez une nouvelle trace pour un zoom automatique

## 🛠️ Technologies utilisées

### Bibliothèques JavaScript

- **[Leaflet 1.9.4](https://leafletjs.com/)** : bibliothèque de cartographie interactive
- **[Leaflet PolylineDecorator](https://github.com/bbecquet/Leaflet.PolylineDecorator)** : plugin pour les flèches directionnelles
- **DOMParser API** : parsing natif des fichiers XML/GPX
- **FileReader API** : lecture des fichiers locaux

### Standards web

- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript ES6+ (async/await, arrow functions, modules)

### Fonds de carte

- **OpenStreetMap** : données cartographiques libres et collaboratives
- Attribution obligatoire incluse conformément à la licence ODbL

## 📂 Structure du code

### Fonctions principales

#### Conversion GPX → GeoJSON
```javascript
convertGpxToGeoJSON(xml)
```
Convertit un document XML GPX en collection de features GeoJSON

#### Gestion des waypoints
```javascript
createWaypointMarker(latlng, name)    // Crée un marker éditable
addWaypointsFromFeatures(features)    // Import waypoints depuis GPX
getWaypointMarkers()                  // Récupère tous les markers
```

#### Export
```javascript
exportUpdatedGpx()                    // Génère et télécharge le GPX
```

#### Affichage
```javascript
displayGeoJSON(geojsonData)           // Affiche les données sur la carte
createArrowMarkers(layer)             // Génère les flèches directionnelles
```

### Architecture

```
├── Initialisation carte (Leaflet)
├── Gestionnaires d'événements
│   ├── Import fichier (button + input)
│   ├── Drag & drop
│   └── Export GPX
├── Parseur GPX → GeoJSON
├── Moteur de rendu Leaflet
├── Gestionnaire de waypoints
└── Générateur GPX
```

## 📝 Formats supportés

### Éléments GPX reconnus

**Entièrement supportés :**
- `<wpt>` : Waypoints (points d'intérêt)
- `<trk>` : Tracks (traces GPS enregistrées)
  - `<trkseg>` : Segments de track
  - `<trkpt>` : Points de track
- `<rte>` : Routes (itinéraires planifiés)
  - `<rtept>` : Points de route

**Métadonnées extraites :**
- `<name>` : Nom de l'élément
- `<desc>` : Description
- `<ele>` : Élévation (préservée mais non utilisée visuellement)
- `<time>` : Horodatage (préservé mais non affiché)

### Exemple de structure GPX compatible

```xml
<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="Application">
  <wpt lat="48.8566" lon="2.3522">
    <name>Tour Eiffel</name>
    <desc>Monument emblématique</desc>
  </wpt>
  <trk>
    <name>Balade parisienne</name>
    <trkseg>
      <trkpt lat="48.8566" lon="2.3522">
        <ele>35</ele>
        <time>2025-01-15T10:00:00Z</time>
      </trkpt>
      <!-- Plus de points... -->
    </trkseg>
  </trk>
</gpx>
```

## ⚠️ Limitations connues

### Fonctionnelles
- **Pas d'édition des traces** : seuls les waypoints sont modifiables
- **Pas de fusion de traces** : un seul fichier GPX à la fois
- **Pas de statistiques** : distance, dénivelé, durée non calculés
- **Waypoints non déplaçables** : position fixée lors de la création

### Techniques
- **Navigateurs modernes uniquement** : IE11 non supporté
- **Fichiers volumineux** : les très gros fichiers GPX (>5 MB) peuvent ralentir l'affichage
- **Export limité** : seuls les waypoints sont modifiés, tracks/routes inchangés
- **Pas de géocodage inversé** : pas de recherche d'adresse automatique

### Sécurité
- **Traitement client-side uniquement** : aucune donnée n'est envoyée à un serveur
- **Validation XML basique** : fichiers malformés peuvent causer des erreurs

## 🤝 Contribution

### Améliorations possibles

**Fonctionnalités :**
- [ ] Édition des points de track (déplacement, suppression)
- [ ] Calcul de statistiques (distance, dénivelé, vitesse moyenne)
- [ ] Support du profil altimétrique
- [ ] Export en d'autres formats (KML, KMZ, GeoJSON)
- [ ] Import de plusieurs traces simultanées
- [ ] Gestion de calques (afficher/masquer traces/waypoints)
- [ ] Recherche de lieux (géocodage)
- [ ] Mesure de distance interactive

**Interface :**
- [ ] Mode sombre
- [ ] Sélection de fonds de carte (satellite, topo)
- [ ] Panneau latéral avec liste des waypoints
- [ ] Undo/Redo
- [ ] Raccourcis clavier

**Technique :**
- [ ] Tests unitaires
- [ ] Optimisation des performances (virtualisation des markers)
- [ ] Progressive Web App (PWA)
- [ ] Support hors-ligne avec Service Worker

### Comment contribuer

1. Forkez le projet
2. Créez une branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos modifications (`git commit -m 'Add AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet utilise :
- **Leaflet** : BSD-2-Clause License
- **OpenStreetMap** : données sous ODbL
- **Leaflet PolylineDecorator** : MIT License

Le code source de cette application peut être utilisé librement pour des projets personnels ou commerciaux.

## 🙏 Remerciements

- [Leaflet](https://leafletjs.com/) pour l'excellente bibliothèque de cartographie
- [OpenStreetMap](https://www.openstreetmap.org/) et ses contributeurs pour les données cartographiques
- La communauté open-source pour les plugins et outils

---

**Version :** 1.0.0  
**Dernière mise à jour :** Octobre 2025  

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur le dépôt du projet.