import { makeAutoObservable, runInAction } from 'mobx';
import React from 'react';
import agent from '../api/agent';
import { UserProfile } from '../models/profile';
import { store } from './store';

export default class ProfileStore {
    profile: UserProfile | null = null;
    loadingProfile = false;
    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    get isCurrentUser() {
        if (store.userStore.UserLoggedIn && this.profile) {
            return store.userStore.UserLoggedIn.id === this.profile.id;
        }
        return false;
    }

    loadProfile = async (email: string) => {
        this.loadingProfile = true;
        try {
            const profile = await agent.Profiles.get(email);
            runInAction(() => {
                this.profile = profile;
                this.loadingProfile= false;
            })
        }catch(error){
            console.log(error);
            runInAction(() => this.loadingProfile = false);
        }
    }

    updateProfile = async (profile: Partial<UserProfile>) => {
        this.loading = true;
        try {
            await agent.Profiles.updateProfile(profile);
            runInAction(() => {
                if (profile.emri && profile.emri !== store.userStore.user?.emri) {
                    store.userStore.setEmri(profile.emri);
                }
                if (profile.mbiemri && profile.mbiemri !== store.userStore.user?.mbiemri) {
                    store.userStore.setMbiemri(profile.mbiemri);
                }
                if (profile.emriMesem && profile.emriMesem !== store.userStore.user?.emriMesem) {
                    store.userStore.setEmriMesem(profile.emriMesem);
                }
                if (profile.dateLindja && profile.dateLindja !== store.userStore.user?.datelindja) {
                    store.userStore.setDatelindja(profile.dateLindja);
                }
                if (profile.gjinia && profile.gjinia !== store.userStore.user?.gjinia) {
                    store.userStore.setGjinia(profile.gjinia);
                }
                if (profile.titulliShkencor && profile.titulliShkencor !== store.userStore.user?.titulliShkencor) {
                    store.userStore.setTitulliShkencor(profile.titulliShkencor);
                }
                if (profile.vendlindja && profile.vendlindja !== store.userStore.user?.vendlindja) {
                    store.userStore.setVendlindja(profile.vendlindja);
                }
                if (profile.shtetiILindjes && profile.shtetiILindjes !== store.userStore.user?.shtetiLindjes) {
                    store.userStore.setShtetiLindjes(profile.shtetiILindjes);
                }
                if (profile.rrugaCurrent && profile.rrugaCurrent !== store.userStore.user?.rrugaCurrent) {
                    store.userStore.setRruga(profile.rrugaCurrent);
                }
                if (profile.qytetiCurrent && profile.qytetiCurrent !== store.userStore.user?.qytetiCurrent) {
                    store.userStore.setQyteti(profile.qytetiCurrent);
                }
                if (profile.zipKodiCurrent && profile.zipKodiCurrent !== store.userStore.user?.zipKodiCurrent) {
                    store.userStore.setZipKodi(profile.zipKodiCurrent);
                }
                if (profile.shtetiCurrent && profile.shtetiCurrent !== store.userStore.user?.shtetiCurrent) {
                    store.userStore.setShteti(profile.shtetiCurrent);
                }
                if (profile.pershkrimi && profile.pershkrimi !== store.userStore.user?.pershkrimi) {
                    store.userStore.setPershkrimi(profile.pershkrimi);
                }
                if (profile.linkedIn && profile.linkedIn !== store.userStore.user?.linkedIn) {
                    store.userStore.setLinkedIn(profile.linkedIn);
                }
                if (profile.phoneNumber && profile.phoneNumber !== store.userStore.user?.phoneNumber) {
                    store.userStore.setPhoneNumber(profile.phoneNumber);
                }
                this.profile = {...this.profile, ...profile as UserProfile};
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => this.loading = false);
        }
    }
}