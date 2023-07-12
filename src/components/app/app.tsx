import MainPage from '../../pages/main-page/main-page';
type AppProps = {
    placesNumber: number;
};

function App({ placesNumber }: AppProps): JSX.Element {
  return (
    <MainPage placesNumber={placesNumber}></MainPage>
  );
}
export default App;