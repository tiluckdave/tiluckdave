import Container from 'components/Container';

export default function ProposalsLayout({ children }) {
  return (
    <Container
    title="Proposal"
    >

      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
