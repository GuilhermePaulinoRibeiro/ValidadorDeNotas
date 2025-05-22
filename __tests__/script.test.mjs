import { validarNota, calcularMedia, determinarSituacao } from '../script.js';

test('validação de nota correta', () => {
  expect(validarNota(8)).toBe(true);
  expect(validarNota(-1)).toBe(false);
  expect(validarNota(11)).toBe(false);
});

test('cálculo da média', () => {
  expect(calcularMedia(8, 6)).toBe(7);
  expect(calcularMedia(10, 10)).toBe(10);
});

test('determinação da situação', () => {
  expect(determinarSituacao(4.9)).toBe("Reprovado");
  expect(determinarSituacao(5.5)).toBe("Recuperação");
  expect(determinarSituacao(7)).toBe("Aprovado");
});