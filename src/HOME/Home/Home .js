import React from 'react'
import NextEvent from '../NextEvent/NextEvent'
import './Home.css'


export default function Home () {
  return (
    <main> <h1>Shotokan Karate-do International Federation - Belgique</h1>
   
    
    <div>
    <section>
        <h2>BIENVENUE À SKIF-B</h2>
        <p>A SKIF-B nous enseignons et pratiquons le Karaté Dō Shōtōkan traditionnel tel qu'il est enseigné au SKIF Honbu Dōjō à Tōkyō - Japon.
            L'enseignement est basé sur une méthode permettant à chacun, quel que soit son genre, son âge et ses capacités, de progresser en Karaté-dō Shōtōkan.</p>
    
    </section>
        <section>
            <h2>Nos liens avec le Japon</h2>
            <p>Des liens étroits avec les instructeurs japonais permettent à nos membres de recevoir régulièrement des cours de haut niveau directement des meilleurs experts japonais. Tous nos grades dan sont enregistrés au Japon.</p>		
        </section>
        <section>
            <h2>La famille Karaté</h2>
            <p>En tant que membre de la SKIF, vous faites partie d'une "famille de karaté" mondiale, SKIF Karateka où le "F" de "SKIF" ne signifie pas seulement "Fédération" mais aussi "Ami" ou "Famille".</p>
        </section>
<section>
<h2>Les compétitions de karaté</h2>
<p>Nous offrons la possibilité aux jeunes karatékas de participer à des compétitions dans un environnement sûr et respectueux en Belgique mais aussi à l'étranger. Nous vous encourageons à visiter ce site pour en savoir plus sur nous et sur la SKIF.</p>
</section></div>
<>
<NextEvent />
<p className='japaneseKanjiSkifb'>國 際 松 濤 館 空 手 道 ベ ル ギ ー 連 盟</p>
</>
</main>
  )
}
