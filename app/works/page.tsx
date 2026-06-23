import works from '@/data/works.json'
import styles from './works.module.css'
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata(): Promise<Metadata> {
  const description = "学生エンジニア Miyanber の制作物一覧です。"
  const title = `Works | Miyanber.com`

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

export default async function Works() {
	return (
		<section className="content">
			<div className="header-title">Works</div>
			<div className={styles.works}>
				{works.map((work) => {
					const content = (
						<Image
							src={work.thumbnail ? work.thumbnail : '/main/img/NO_IMAGE.png'}
							alt="サムネイル"
							width={160} 
							height={120}
						/>
					)
					return (
						<div key={work.id} className={styles.work}>
							{ work.link ? (
								<a href={work.link} target="_blank" rel="noopener noreferrer" className={styles.thumbnail}>{content}</a>
							) : (
								<div className={styles.thumbnail}>{content}</div>
							)}
							<div className={styles.text}>
								<div className={styles.title}>{ work.title }</div>
								<div className={styles.border}></div>
								<div className={styles.overview}>
									{ work.overview }
								</div>
							</div>
						</div>
				)})}
			</div>
		</section>
	)
}