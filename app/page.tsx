import Image from "next/image";

import drumsImg from '/img/drums.jpg';
import oceanImg from './img/oceanarrow.png';
import trackImg from './img/trackandfield.jpg'
import vscodeImg from './img/vscode_image.png'

export default function Home() {
  return (
    <div>
      <section className="index_container">
        <div className="header_container">
          <div className="h1_container">
              <h1>Miyanber</h1>
          </div>
          <Image className="img-1" src={drumsImg} alt="ドラム"/>
          <Image className="img-2" src={oceanImg} alt="OceanArrow (Minecraft)"/>
          <Image className="img-3" src={vscodeImg} alt="コーディング"/>
          <Image className="img-4" src={trackImg} alt="陸上" />
        </div>
      </section>
      <section className="content about">
        <h2>About Me</h2>
        <p>
            <strong>フルスタック・クリエイター ｜ Python, Java, JavaScript</strong>
        </p>
        <p>
            「日常の不便をコードで解決する」をモットーに活動する開発者です。<br />
            Webアプリケーションの設計・開発から、Minecraft MODの制作まで、プラットフォームを問わず「動くもの」を形にしています。
        </p>
        <p>
            Skills: Python / Django / JavaScript / GitHub / Minecraft Modding
        </p>
        <p>
            なお、春から大学生。<br />
            趣味は陸上・ドラム・システム開発。
        </p>
      </section>
      <section className="content">
        <h2>Works</h2>
        <div className="works">
            {% for work in works %}
            <a href="{{ work.link }}" className="work" target="_blank" rel="noopener noreferrer">
                <div className="thumbnail">
                    <Image src="{% if work.thumbnail %}{{ work.thumbnail.url }}{% else %}{% static 'main/img/NO_IMAGE.png' %}{% endif %}" alt="サムネイル" />
                </div>
                <div className="text">
                    <div className="title">{{ work.title }}</div>
                    <div className="border"></div>
                    <div className="overview">
                        {{ work.overview }}
                    </div>
                </div>
            </a>
            {% endfor %}
        </div>
        <div className="link">
            <a href="{% url "main:works" %}">View All</a>
        </div>
      </section>
      <section className="content blog">
        <h2>Blog</h2>
        <div className="blogposts">
            {% for blogpost in blogposts %}
            <a href="{% url "main:blog_detail" blogpost.published_at.year blogpost.published_at.month blogpost.slug %}" className="blogpost-wrapper">
                <div className="blogpost">
                    <div className="thumbnail">
                        <Image src="{% if blogpost.get_thumbnail %}{{ blogpost.get_thumbnail }}{% else %}{% static 'main/img/NO_IMAGE_square.png' %}{% endif %}" alt="サムネイル">
                    </div>
                    <div className="text">
                        <div className="title">{{ blogpost.title }}</div>
                        <div className="published_at">{{ blogpost.published_at.date }}</div>
                    </div>
                </div>
            </a>
            {% endfor %}
        </div>
      </section>
      <section className="content">
        <h2>Contact</h2>
        <p>
            Email: miyanba2984h@gmail.com
        </p>
      </section>
    </div>
  );
}
