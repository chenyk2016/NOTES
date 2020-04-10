# Jasmine/Jest 风格的 expect 断言作为示例
describe('MyComponent', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof MyComponent.created).toBe('function')
  })
});
