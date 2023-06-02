import React from 'react'
import "./Pages.css"
import { useTranslation } from "react-i18next";
import "../i18n";

export default function DojoKun() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.toUpperCase();
  const downloadURL = `https://skifb-admin.be/api/DocumentsApi/DownloadDocument?id=d85e1994-9fda-4e75-8201-d8c00f8c9536&&versionFile=${lang}`;

  
  return (

    <main>
    <h1> Dojo Kun</h1>
    <div className='kanjis' >
    <p className='kanjisMiddle' >  道  場  釧</p>
    <p>一、人格完成に努むること</p>
    <p>一、誠の道を守ること</p>
    <p>一、努力の精神を養うこと</p>
    <p>一、礼儀を重んずること</p>  
    <p>一、血気の勇を戒むること</p>
   </div>
   <div className='alignCenter' >
   <h2>Hitotsu - jinkaku kansei ni tsutomuru koto.</h2>
   <p>{t("dojokun.1")}</p>

   <h2>Hitotsu - makoto no michi o mamoru koto.</h2>
   <p>{t("dojokun.2")}</p>

   <h2>Hitotsu - dōryoku no seishin o yashinau koto.</h2>
   <p>{t("dojokun.3")}</p>

   <h2>Hitotsu - reigi o omonzuru koto.</h2>
   <p>{t("dojokun.4")}</p>
   
   <h2>Hitotsu - kekki no yū o imashimuru koto.</h2>
   <p>{t("dojokun.5")}</p>
   </div>
   <div className="button-container">
					<a className="download-button" href={downloadURL}>
						{t("termsconditions.download_button")}
					</a>
				</div>
   </main>
  )
}
