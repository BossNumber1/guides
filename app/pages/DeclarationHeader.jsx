import Head from "next/head";

function DeclarationHeader({ title, keywords }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={title} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Устинов Дмитрий" />
            <link rel="icon" href="https://clck.ru/rYLWk" />
        </Head>
    );
}

export default DeclarationHeader;
