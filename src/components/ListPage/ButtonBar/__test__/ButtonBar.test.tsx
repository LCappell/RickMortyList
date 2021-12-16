import { render, screen, fireEvent } from '@testing-library/react';
import RickPicture from '../../../../assets/rickmortybg.jpeg';

import ButtonBar from '../ButtonBar';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Pagination Buttons', () => {
  test('Should render two buttons', async () => {
    const id: number = 1;
    render(<ButtonBar id={id} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('Previous');
    expect(buttons[0]).toBeEnabled();
    expect(buttons[1]).toHaveTextContent('Next');
  });

  test('Button successfully emit event', () => {
    const id: number = 1;
    render(<ButtonBar id={id} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(id).toEqual(1);
  });

  test('Image is being displayed', () => {
    const id: number = 0;
    render(<ButtonBar id={id} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', RickPicture);
  });
});
