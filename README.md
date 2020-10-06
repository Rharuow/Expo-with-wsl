# Expo with WSL

## Step 1 - Install and config 'expo'
1. Install expo cli globally:
> sudo npm install --global expo-cli
2. Create Project
> yarn create react-native-app <app-name>
3. Add tsconfig.json on root project ([expo-doc](https://github.com/expo/expo/blob/master/templates/expo-template-blank-typescript/tsconfig.json)):
> {
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "jsx": "react-native",
    "lib": [
      "dom",
      "esnext"
    ],
    "moduleResolution": "node",
    "noEmit": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "strict": true
  }
}

4. Change App.js to App.tsx
```
import React from 'react';
import { View } from 'react-native';
 
const App: React.FC = () => {
  return (
    <View />
  );
}

export default App;
```

5. 

5. Run expo with tunnel default

> expo start --tunnel

## Step 2 - Typescript

1. Install typescript dependencies
> yarn add --dev typescript @types/react @types/react-native @types/react-dom