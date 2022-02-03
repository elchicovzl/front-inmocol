import Header from '../../components/Header';

export default function BasicLayout(props) {
    const { children } = props;

    return (
        <div className="max-w-7xl mx-auto">
            <Header />
            {/* begin content */}
            <div className="bg-gray-300 w-full h-screen">

            </div>
            {/* finish content */}
            {children}
        </div>
    );
}
