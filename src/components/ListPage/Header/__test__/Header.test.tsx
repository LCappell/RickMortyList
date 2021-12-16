import { render, screen } from '@testing-library/react';
import Header from '../Header';
import RickLogo from '../../../../assets/ricklogo.png';

describe('Images', () => {
  test('Should render all images on the header', async () => {
    render(<Header />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);
  });

  test('Should display initial Logo', async () => {
    render(<Header />);
    const Logo = screen.getByAltText('rick and morty logo');
    expect(Logo).toHaveAttribute('src', RickLogo);
  });
});
