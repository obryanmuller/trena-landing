/**
 * GUIA DE CORES GLOBAIS
 * 
 * Este arquivo documenta como usar as variáveis de cores configuradas
 */

export const COLORS = {
  // Primária (Azul)
  primary: {
    light: 'bg-primary-50',
    lighter: 'bg-primary-100',
    lightest: 'bg-primary-200',
    base: 'bg-primary-500',
    dark: 'bg-primary-600',
    darker: 'bg-primary-700',
    darkest: 'bg-primary-900',
  },

  // Secundária (Verde)
  secondary: {
    light: 'bg-secondary-50',
    lighter: 'bg-secondary-100',
    lightest: 'bg-secondary-200',
    base: 'bg-secondary-500',
    dark: 'bg-secondary-600',
    darker: 'bg-secondary-700',
    darkest: 'bg-secondary-900',
  },

  // Accent (Rosa)
  accent: {
    light: 'bg-accent-50',
    lighter: 'bg-accent-100',
    lightest: 'bg-accent-200',
    base: 'bg-accent-500',
    dark: 'bg-accent-600',
    darker: 'bg-accent-700',
    darkest: 'bg-accent-900',
  },

  // Neutras (Cinza)
  neutral: {
    light: 'bg-neutral-50',
    lighter: 'bg-neutral-100',
    lightest: 'bg-neutral-200',
    base: 'bg-neutral-500',
    dark: 'bg-neutral-600',
    darker: 'bg-neutral-700',
    darkest: 'bg-neutral-900',
  },

  // Variações de texto
  text: {
    light: 'text-neutral-50',
    lighter: 'text-neutral-100',
    base: 'text-neutral-900',
    dark: 'text-neutral-800',
  },

  // Variações de border
  border: {
    light: 'border-neutral-200',
    base: 'border-neutral-300',
    dark: 'border-neutral-400',
  },
};

/**
 * EXEMPLOS DE USO:
 * 
 * // Botão primário
 * <button className="bg-primary-600 text-white hover:bg-primary-700">
 *   Clique aqui
 * </button>
 * 
 * // Texto com cor secundária
 * <h2 className="text-secondary-600">Título</h2>
 * 
 * // Fundo com accent e border
 * <div className="bg-accent-50 border-2 border-accent-200 rounded-lg p-4">
 *   Conteúdo
 * </div>
 * 
 * // Usando variáveis CSS no CSS puro
 * .meu-elemento {
 *   background-color: var(--color-primary-600);
 *   color: var(--color-neutral-900);
 * }
 */
