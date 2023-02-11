import css from "components/JapanMap/StyleMap.module.css"



const JapanMap = () => {
    return (
        <div className={css.body}>
            <div className={`${css.japanmap} ${css.clearfix}`}>

                <div className={`${css.hokkaidotouhoku} ${css.clearfix}`}>
                    <p className={css.areatitle}>北海道・東北</p>
                    <div className={css.area}>
                        <a href="#">
                            <div className={css.hokkaido}>
                                <p>北海道</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.aomori}>
                                <p>青森</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.akita}>
                                <p>秋田</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.iwate}>
                                <p>岩手</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.yamagata}>
                                <p>山形</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.miyagi}>
                                <p>宮城</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.fukushima}>
                                <p>福島</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className={css.kantou}>
                    <p className={css.areatitle}>関東</p>
                    <div className={css.area}>
                        <a href="#">
                            <div className={css.gunma}>
                                <p>群馬</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.tochigi}>
                                <p>栃木</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.ibaraki}>
                                <p>茨城</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.saitama}>
                                <p>埼玉</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.chiba}>
                                <p>千葉</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.tokyo}>
                                <p>東京</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.kanagawa}>
                                <p>神奈川</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className={`${css.tyubu} ${css.clearfix}`}>
                    <p className={css.areatitle}>中部</p>
                    <div className={css.area}>
                        <a href="#">
                            <div className={css.nigata}>
                                <p>新潟</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.toyama}>
                                <p>富山</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.ishikawa}>
                                <p>石川</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.fukui}>
                                <p>福井</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.nagano}>
                                <p>長野</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.gifu}>
                                <p>岐阜</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.yamanashi}>
                                <p>山梨</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.aichi}>
                                <p>愛知</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.shizuoka}>
                                <p>静岡</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className={`${css.kinki} ${css.clearfix}`}>
                    <p className={css.areatitle}>近畿</p>
                    <div className={css.area}>
                        <a href="#">
                            <div className={css.kyoto}>
                                <p>京都</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.shiga}>
                                <p>滋賀</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.osaka}>
                                <p>大阪</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.nara}>
                                <p>奈良</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.mie}>
                                <p>三重</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.wakayama}>
                                <p>和歌山</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.hyougo}>
                                <p>兵庫</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className={`${css.tyugoku} ${css.clearfix}`}>
                    <p className={css.areatitle}>中国</p>
                    <div className={css.area}>
                        <a href="#">
                            <div className={css.tottori}>
                                <p>鳥取</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.okayama}>
                                <p>岡山</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.shimane}>
                                <p>島根</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.hiroshima}>
                                <p>広島</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.yamaguchi}>
                                <p>山口</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className={`${css.shikoku} ${css.clearfix}`}>
                    <p className={css.areatitle}>四国</p>
                    <div className={css.area}>
                        <a href="#">
                            <div className={css.kagawa}>
                                <p>香川</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.ehime}>
                                <p>愛媛</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.tokushima}>
                                <p>徳島</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.kouchi}>
                                <p>高知</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className={`${css.kyusyu} ${css.clearfix}`}>
                    <p className={css.areatitle}>九州・沖縄</p>
                    <div className={css.area}>
                        <a href="#">
                            <div className={css.fukuoka}>
                                <p>福岡</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.saga}>
                                <p>佐賀</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.nagasaki}>
                                <p>長崎</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.oita}>
                                <p>大分</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.kumamoto}>
                                <p>熊本</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.miyazaki}>
                                <p>宮崎</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.kagoshima}>
                                <p>鹿児島</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className={css.okinawa}>
                                <p>沖縄</p>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default JapanMap