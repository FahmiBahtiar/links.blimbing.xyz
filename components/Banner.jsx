// Banner.js
import styled from 'styled-components';

const Banner = styled.div`
  display: flex;
  align-items: center;
  background: #333; /* Latar belakang hitam gelap */
  border: 1px solid #444; /* Border hitam gelap dengan transparansi */
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: #eee; /* Warna teks yang terang untuk kontras */
  font-size: 0.85rem;
  font-weight: 400;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);

  &:hover {
    background: #555; /* Warna latar belakang saat hover yang sedikit lebih terang */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
  }
`;

const Icon = styled.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;

  ${Banner}:hover & {
    transform: scale(1.1);
  }
`;

const Label = styled.span`
  font-size: 0.85rem;
  display: flex;
  align-items: center;
`;

const BannersContainer = styled.div`
  max-width: 100%;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background: #1a1a1a; /* Latar belakang kontainer yang lebih gelap */
  border-radius: 10px; /* Border radius untuk kontainer */
  padding: 2rem; /* Padding ekstra untuk kontainer */
`;

function BannerComponent({ icon, label }) {
  return (
    <Banner>
      <Icon>{icon}</Icon>
      <Label>{label}</Label>
    </Banner>
  );
}

function Banners() {
  return (
    
    <BannersContainer>
      <BannerComponent icon="💻" label="Programming" />
      <BannerComponent icon="✈️" label="Flightsimmer" />
      <BannerComponent icon="📚" label="Learning" />
      <BannerComponent icon="🎮" label="Gaming" />
    </BannersContainer>
  );
}

export default Banners;
