import { Card, Heading, Image, Link, Paragraph } from 'theme-ui';

function FeedWell() {
  return (
    <Card>
      <Heading as="h3" variant="card">
        Updates via RSS
      </Heading>
      <Image
        src="/undraw-posts.svg"
        alt="RSS Updates"
        marginX="auto"
        marginY={4}
        sx={{
          display: 'block',
          width: 240,
        }}
      />
      <Paragraph>
        Hey, remember RSS feeds? New posts are added to a feed for you to
        consume with your favourite reader. Subscribe below!
      </Paragraph>
      <Link variant="rss" href="/feed">
        RSS Feed
      </Link>
    </Card>
  );
}

export { FeedWell };
