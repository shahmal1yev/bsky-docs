import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Typescript',
    Svg: require('@site/static/img/languages/typescript.svg').default,
    description: <>Official SDK maintained by Bluesky PBC</>,
    href: 'https://github.com/bluesky-social/atproto/tree/main/packages/api',
  },
  {
    title: 'Python',
    Svg: require('@site/static/img/languages/python.svg').default,
    description: <>Community SDK maintained by @marshal.dev</>,
    href: 'https://atproto.blue/',
  },
  {
    title: 'Dart',
    Svg: require('@site/static/img/languages/dart.svg').default,
    description: <>Community SDK maintained by @shinyakato.dev</>,
    href: 'https://atprotodart.com/',
  },
  {
    title: 'PHP',
    Svg: require('@site/static/img/languages/php.svg').default,
    description: <>Community SDK maintained by @shahmal1yev</>,
    href: 'https://github.com/shahmal1yev/blueskysdk'
  },
  {
    title: 'Go',
    Svg: require('@site/static/img/languages/go.svg').default,
    description: <>SDK maintained by Bluesky PBC</>,
    href: 'https://github.com/bluesky-social/indigo/tree/main',
  },
]

function SDK({ Svg, title, description, href }) {
  return (
    <Link className={styles.sdk} to={href}>
      <Svg className={styles.sdkSvg} role="img" />
      <div className="">
        <span className={styles.sdkTitle}>{title}</span>
        <span className={styles.sdkDescription}>{description}</span>
      </div>
    </Link>
  )
}

export default function HomepageSDKs() {
  return (
    <section className={styles.sdks}>
      <h2 className={clsx('text--center text--lg', styles.heading)}>
        Choose your language
      </h2>
      <div className={styles.sdksWrapper}>
        {FeatureList.map((props, idx) => (
          <SDK key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}
