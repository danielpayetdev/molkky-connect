import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(appRoutes), provideFirebaseApp(() => initializeApp({ projectId: "molkky-legend", appId: "1:80827853247:web:fe82f4c171750b2854590a", storageBucket: "molkky-legend.firebasestorage.app", apiKey: "AIzaSyAwbNmbREEs9EpX7Ha78Bz925cYXKfoGag", authDomain: "molkky-legend.firebaseapp.com", messagingSenderId: "80827853247", measurementId: "G-8L1ZN97QVB" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()),
  ],
};
