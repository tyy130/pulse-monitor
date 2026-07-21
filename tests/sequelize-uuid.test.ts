import { DataTypes, Utils } from 'sequelize';

describe('Sequelize UUID compatibility', () => {
  it('generates UUID v1 and v4 defaults through the patched uuid package', () => {
    const uuidV1 = Utils.toDefaultValue(new DataTypes.UUIDV1());
    const uuidV4 = Utils.toDefaultValue(new DataTypes.UUIDV4());

    expect(uuidV1).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-1[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
    expect(uuidV4).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
  });
});
