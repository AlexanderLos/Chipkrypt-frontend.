import Typewriter from 'typewriter-effect';

const Swap = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Coming soon...')
          .start();
        }}
      />
    </div>
  );
};

export default Swap;
