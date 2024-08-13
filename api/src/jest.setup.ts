jest.mock('./models/Task', () => {
    return {
      __esModule: true,
      default: jest.fn().mockImplementation(() => ({
        findAll: jest.fn().mockResolvedValue([]),
        findByPk: jest.fn().mockResolvedValue(null)
      }))
    };
  });
  