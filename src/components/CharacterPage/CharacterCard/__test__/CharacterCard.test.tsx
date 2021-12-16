import { render, screen } from '@testing-library/react';
import { Character } from '../../../../Types/Character';
import CharacterCard from '../CharacterCard';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('List of Characters', () => {
  test('Should render name of character', async () => {
    // @ts-ignore
    render(<CharacterCard characterInfo={{}} />);
    const characterName = screen.getByRole('heading');
    expect(characterName).not.toBeUndefined();
    expect(characterName).toBeVisible();
  });
  test('Should render all character details', async () => {
    // @ts-ignore
    render(<CharacterCard characterInfo={{}} />);
    const characterDetails = screen.getAllByRole('heading');
    expect(characterDetails).not.toBeUndefined();
  });

  test('Should display initial Logo', async () => {
    //@ts-ignore
    render(<CharacterCard characterInfo={{}} />);
    const Logo = screen.getByRole('img');
    expect(Logo).toHaveAttribute('alt', 'character profile');
  });
});
