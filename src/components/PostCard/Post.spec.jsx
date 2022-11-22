import { render, screen } from "@testing-library/react";
import PostCard from ".";
import { postCardPropsMock } from "./mock";

import TestRenderer from 'react-test-renderer'

const props = postCardPropsMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByAltText(/title 1/i))
      .toHaveAttribute("src","img/img.png");
    
    expect(screen.getByRole("heading", { name: 'title 1 1' }))
      .toBeInTheDocument();

    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const testRenderer = TestRenderer.create(
        <PostCard {...props} ></PostCard>
      ).toJSON();
      
    expect(testRenderer).toMatchSnapshot();
});

});
