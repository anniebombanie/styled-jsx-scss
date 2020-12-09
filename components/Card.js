import cardStyles from './card.scss';

const Card = () => (
    <a href="https://nextjs.org/docs" className="card">
        <style jsx>{cardStyles}</style>
        <h3>Documentation &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
    </a>
);

export default Card;