import { render, screen } from '@testing-library/react';
import { Character } from '../../../../Types/Character';
import CharacterItem from '../../CharacterItem/CharacterItem';

const mockData: Character = {
  name: 'Lous',
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
    render(<CharacterItem item={mockData} />);
    const characterName = screen.getByRole('heading');
    expect(characterName).toHaveClass('character-name');
  });

  test('Should render image of character', async () => {
    // @ts-ignore
    render(<CharacterItem item={mockData} />);
    const characterImage = screen.getByRole('img');
    expect(characterImage).toHaveAttribute('alt', 'character profile');
  });
});
