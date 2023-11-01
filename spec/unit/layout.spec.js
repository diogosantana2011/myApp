test('Call on Layout component', () => {
    const component = jest.mock('../../components/layout', () => ('Layout'));    
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
});
