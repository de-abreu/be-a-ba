import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FeatureItem = {
    title: JSX.Element;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    path: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: (<><Translate>Lógica Combinacional</Translate></>),
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                <Translate>
                    Aprenda sobre as Portas Lógicas, a relação destas com a Álgebra Booleana, e dê início a seus primeiros circuítos eletrônicos.
                </Translate>
            </>
        ),
        path: '/docs/category/lógica-combinacional'
    },
    {
        title: (<><Translate>Lógica Sequencial</Translate></>),
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                <Translate>
                    Crie circuítos com memória, e esquematize a transformação dos dados em uma Máquina de Estados Finitos.
                </Translate>
            </>
        ),
        path: '/docs/category/lógica-sequencial'
    },
    {
        title: (<><Translate>O Processador digital</Translate></>),
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                <Translate>
                    Conheça e implemente os componentes de um processador digital.
                </Translate>
            </>
        ),
        path: '/docs/category/o-processador-digital'
    },
];

function Feature({ title, Svg, description, path }: FeatureItem) {
    const link = useBaseUrl(path)
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <a href={link}>
                    <Heading as="h3">{title}</Heading>
                </a>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
