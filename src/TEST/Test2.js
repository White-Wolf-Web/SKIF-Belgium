import React from 'react'
import { UseFetchData } from '../HOOK/UseFetchData'

export default function Test2() {
    const {
        data,
        isLoading,
        error,
        } = UseFetchData('https://api.zippopotam.us/fr/33000');
        return (
        <div
        style={{ backgroundColor: '#fefefe', height: '100px', width: '100%', justifyContent:'center',display:'flex', marginTop:20, fontSize:40 }}
        >
        {isLoading ? (
        <p>Chargement ...🤔</p>
        ) : (
        <ul>
        {data.map((event) => (
        <li key={event.id}>{event.club}</li>
        ))}
        </ul>
        )}
        {error && <p>{error}</p>}
        </div>
        );
        }
     