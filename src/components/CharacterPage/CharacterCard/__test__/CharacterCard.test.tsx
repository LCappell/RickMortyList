import { render, screen } from '@testing-library/react';
import { Character } from '../../../../Types/Character';
import CharacterCard from '../CharacterCard';

const mockData: Character = {
  name: 'Louis',
  gender: 'male',
  status: 'alive',
  location: { name: 'London', url: '' },
  origin: { name: 'Earth', url: '' },
  image: '',
  id: 1,
  species: 'human',
  episode: [],
  results: [],
};

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('List of Characters', () => {
  test('Should render name of character', async () => {
    render(<CharacterCard characterInfo={mockData} />);
    const characterName = screen.getByRole('heading');
    expect(characterName).not.toBeUndefined();
    expect(characterName).toBeVisible();
  });
  test('Should render all character details', async () => {
    render(<CharacterCard characterInfo={mockData} />);
    const characterDetails = screen.getAllByRole('heading');
    expect(characterDetails).not.toBeUndefined();
  });

  test('Should display initial Logo', async () => {
    render(<CharacterCard characterInfo={mockData} />);
    const Logo = screen.getByRole('img');
    expect(Logo).toHaveAttribute('alt', 'character profile');
  });
});
