const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    marginTop: 50,
    color: 'rgba(8, 53, 69, 0.88)',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to contact site</h1>
    </div>
  );
}
