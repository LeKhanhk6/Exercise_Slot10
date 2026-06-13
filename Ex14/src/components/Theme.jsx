import { useTheme } from '../context/ThemeContext';

export default function Theme() {
  const { theme, toggleTheme, themeName } = useTheme();

  return (
    <div style={{display: 'flex', justifyContent: 'start', marginBottom: '1rem', transition: 'all 0.3s ease',}}>
      <div style={{padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)',
          backgroundColor: theme.background,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        <button type="button" onClick={toggleTheme}
          style={{padding: '0.45rem 0.75rem', borderRadius: '30px', cursor: 'pointer', 
            transition: 'all 0.2s ease', border: '1px solid rgba(0,0,0,0.15)',
            backgroundColor: themeName === 'dark' ? '#ffffff' : '#1f2937',
            color: themeName === 'dark' ? '#111827' : '#ffffff'
          }}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

